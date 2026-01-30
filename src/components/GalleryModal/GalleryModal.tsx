import { useState } from 'react';
import { Icon } from '../Icon';
import styles from './GalleryModal.module.css';

export type GalleryItem = {
  id: string;
  type: 'image' | 'pdf';
  url: string;
  thumbnail?: string;
  name?: string;
};

export interface GalleryModalProps {
  items: GalleryItem[];
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
  title?: string;
  className?: string;
}

export function GalleryModal({
  items,
  isOpen,
  onClose,
  initialIndex = 0,
  title = 'Documentos de vehículo y reparación',
  className = '',
}: GalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [pdfPage, setPdfPage] = useState(1);
  const [pdfZoom, setPdfZoom] = useState(100);
  const [pdfRotation, setPdfRotation] = useState(0);

  if (!isOpen) return null;

  const currentItem = items[currentIndex];
  const totalPages = 2; // This would come from PDF metadata in a real implementation

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : items.length - 1));
    setPdfPage(1);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < items.length - 1 ? prev + 1 : 0));
    setPdfPage(1);
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
    setPdfPage(1);
  };

  const handleZoomIn = () => {
    setPdfZoom((prev) => Math.min(prev + 25, 200));
  };

  const handleZoomOut = () => {
    setPdfZoom((prev) => Math.max(prev - 25, 50));
  };

  const handleRotate = () => {
    setPdfRotation((prev) => (prev + 90) % 360);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = currentItem.url;
    link.download = currentItem.name || `document-${currentIndex + 1}`;
    link.click();
  };

  const handlePrint = () => {
    window.print();
  };

  const handlePdfPagePrev = () => {
    setPdfPage((prev) => Math.max(prev - 1, 1));
  };

  const handlePdfPageNext = () => {
    setPdfPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div className={`${styles.overlay} ${className}`} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <button
            className={styles.closeButton}
            onClick={onClose}
            type="button"
            aria-label="Close modal"
          >
            <Icon name="x-01" size={24} />
          </button>
        </div>

        {/* Main content area */}
        <div className={styles.content}>
          {/* Navigation arrows */}
          {items.length > 1 && (
            <>
              <button
                className={`${styles.navButton} ${styles.navButtonLeft}`}
                onClick={handlePrevious}
                type="button"
                aria-label="Previous item"
              >
                <Icon name="arrow-left" size={24} />
              </button>
              <button
                className={`${styles.navButton} ${styles.navButtonRight}`}
                onClick={handleNext}
                type="button"
                aria-label="Next item"
              >
                <Icon name="arrow-right" size={24} />
              </button>
            </>
          )}

          {/* Viewer */}
          <div className={styles.viewer}>
            {currentItem.type === 'image' ? (
              <img
                src={currentItem.url}
                alt={currentItem.name || `Image ${currentIndex + 1}`}
                className={styles.image}
              />
            ) : (
              <div className={styles.pdfViewer}>
                {/* PDF Header Controls */}
                <div className={styles.pdfHeader}>
                  <div className={styles.pdfHeaderLeft}>
                    <Icon name="menu-01" size={20} />
                    <span className={styles.fileName}>
                      {currentItem.name || 'Document.pdf'}
                    </span>
                  </div>
                  <div className={styles.pdfControls}>
                    <div className={styles.pdfControlGroup}>
                      <button
                        className={styles.pdfControlButton}
                        onClick={handlePdfPagePrev}
                        disabled={pdfPage === 1}
                        type="button"
                        aria-label="Previous page"
                      >
                        <Icon name="arrow-left" size={16} />
                      </button>
                      <span className={styles.pdfPageInfo}>
                        {pdfPage} / {totalPages}
                      </span>
                      <button
                        className={styles.pdfControlButton}
                        onClick={handlePdfPageNext}
                        disabled={pdfPage === totalPages}
                        type="button"
                        aria-label="Next page"
                      >
                        <Icon name="arrow-right" size={16} />
                      </button>
                    </div>

                    <div className={styles.pdfDivider} />

                    <div className={styles.pdfControlGroup}>
                      <button
                        className={styles.pdfControlButton}
                        onClick={handleZoomOut}
                        type="button"
                        aria-label="Zoom out"
                      >
                        <Icon name="minus-circle-contained" size={16} />
                      </button>
                      <span className={styles.pdfZoomInfo}>{pdfZoom}%</span>
                      <button
                        className={styles.pdfControlButton}
                        onClick={handleZoomIn}
                        type="button"
                        aria-label="Zoom in"
                      >
                        <Icon name="plus-01" size={16} />
                      </button>
                    </div>

                    <div className={styles.pdfDivider} />

                    <button
                      className={styles.pdfControlButton}
                      onClick={handleRotate}
                      type="button"
                      aria-label="Rotate"
                    >
                      <Icon name="settings" size={20} />
                    </button>
                    <button
                      className={styles.pdfControlButton}
                      onClick={handleDownload}
                      type="button"
                      aria-label="Download"
                    >
                      <Icon name="download" size={20} />
                    </button>
                    <button
                      className={styles.pdfControlButton}
                      onClick={handlePrint}
                      type="button"
                      aria-label="Print"
                    >
                      <Icon name="file" size={20} />
                    </button>
                  </div>
                </div>

                {/* PDF Content */}
                <div
                  className={styles.pdfContent}
                  style={{
                    transform: `scale(${pdfZoom / 100}) rotate(${pdfRotation}deg)`,
                  }}
                >
                  <iframe
                    src={`${currentItem.url}#page=${pdfPage}`}
                    className={styles.pdfFrame}
                    title={currentItem.name || 'PDF Document'}
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Thumbnail gallery */}
        {items.length > 1 && (
          <div className={styles.thumbnails}>
            {items.map((item, index) => (
              <button
                key={item.id}
                className={`${styles.thumbnail} ${
                  index === currentIndex ? styles.thumbnailActive : ''
                }`}
                onClick={() => handleThumbnailClick(index)}
                type="button"
              >
                {item.type === 'image' ? (
                  <img
                    src={item.thumbnail || item.url}
                    alt={item.name || `Thumbnail ${index + 1}`}
                    className={styles.thumbnailImage}
                  />
                ) : (
                  <div className={styles.thumbnailPdf}>
                    <Icon name="file" size={32} />
                    <span className={styles.thumbnailLabel}>PDF</span>
                  </div>
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
