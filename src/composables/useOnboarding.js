import { ref, computed } from 'vue';

export function useOnboarding() {
    const STEPS = {
        ENTRY: 'entry',
        SELECT: 'select',
        GROUP_NAME: 'group_name',
        JOIN_METHOD: 'join_method'
    };

    const stepOrder = [STEPS.ENTRY, STEPS.SELECT, STEPS.GROUP_NAME, STEPS.JOIN_METHOD];
    const currentStep = ref(STEPS.ENTRY);

    const next = () => {
        const currentIndex = stepOrder.indexOf(currentStep.value);
        if (currentIndex < stepOrder.length - 1) {
            currentStep.value = stepOrder[currentIndex + 1];
        }
    };

    const prev = () => {
        const currentIndex = stepOrder.indexOf(currentStep.value);
        if (currentIndex > 0) {
            currentStep.value = stepOrder[currentIndex - 1];
        }
    };

    const progress = computed(() => {
        const index = stepOrder.indexOf(currentStep.value);
        return (index / (stepOrder.length - 1)) * 100;
    });

    return {
        currentStep,
        STEPS,
        next,
        prev,
        progress
    };
}