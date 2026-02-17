import { ref, onMounted, onUnmounted } from 'vue';

export function useIntersectionObserver(options = {}) {
    const isVisible = ref(false);
    const targetRef = ref(null);
    let observer = null;

    const defaultOptions = {
        threshold: 0.1,
        rootMargin: '0px',
        ...options
    };

    onMounted(() => {
        observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                isVisible.value = true;
                // Optional: disconnect after first intersection
                if (options.once !== false) {
                    observer.disconnect();
                }
            } else if (!options.once) {
                isVisible.value = false;
            }
        }, defaultOptions);

        if (targetRef.value) {
            observer.observe(targetRef.value);
        }
    });

    onUnmounted(() => {
        if (observer) {
            observer.disconnect();
        }
    });

    return { isVisible, targetRef };
}