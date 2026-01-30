// Re-export type from here if circular dep issues, but actually I defined type here first.
// Let's keep it simple.

import styles from './GalleryImage.module.scss';
import { Icon } from '../Icon';

export type GalleryImageStatus =
    | 'small'
    | 'small-cancel'
    | 'medium'
    | 'high'
    | 'high-cancel'
    | 'square-cancel';

export interface GalleryImageProps {
    /**
     * The status/variant of the gallery image
     */
    status: GalleryImageStatus;

    /**
     * The image source URL
     */
    src?: string;

    /**
     * Alt text for the image
     */
    alt?: string;

    /**
     * Label text displayed in the bottom bar
     */
    label?: string;

    /**
     * Callback when the delete/cancel button is clicked
     */
    onDelete?: () => void;

    /**
     * Callback when the view/eye button is clicked
     */
    onView?: () => void;

    /**
     * Custom class name
     */
    className?: string;
}

export function GalleryImage({
    status,
    src,
    alt = 'Gallery image',
    label = 'Nombre de foto',
    onDelete,
    onView,
    className = ''
}: GalleryImageProps) {
    // Determine if this variant has a cancel button
    const hasCancel = status.includes('cancel');

    return (
        <div
            className={`${styles.container} ${styles[status]} ${className}`}
        >
            {/* Background Layer: Image or Grid Placeholder */}
            {src ? (
                <img src={src} alt={alt} className={styles.image} />
            ) : (
                <div className={styles.placeholder} />
            )}

            {/* Top Right: Delete Button (if status has cancel) */}
            {hasCancel && (
                <button
                    className={styles.deleteButton}
                    onClick={(e) => {
                        e.stopPropagation();
                        onDelete?.();
                    }}
                    title="Eliminar"
                >
                    <Icon name="x-01" size={16} />
                </button>
            )}

            {/* Bottom Bar: Label + View Button */}
            {/* This seems to be present in all variants based on the visual,
          containing the text and the eye button */}
            <div className={styles.bottomBar}>
                <span className={styles.label}>{label}</span>
                <button className={styles.viewButton} onClick={onView} title="Ver imagen">
                    <Icon name="eye-open" size={16} color="#FFFFFF" />
                </button>
            </div>
        </div>
    );
}
