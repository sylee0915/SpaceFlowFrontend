import { ref, computed } from 'vue';

export function useOnboarding() {
    const STEPS = {
        ENTRY: 'entry',
        SELECT: 'select',
        GROUP_NAME: 'group_name',
        JOIN_METHOD: 'join_method',
        SET_DOMAIN: 'set_domain',
        SEARCH_GROUP: 'search_group',
        SET_ADMIN: 'set_admin',
        VERIFY_EMAIL: 'verify_email',
        SET_USER_NAME: 'set_user_name',
        DONE: 'done'
    };

    const currentStep = ref(STEPS.ENTRY);
    const selectedType = ref('new');
    const selectedJoinMethod = ref('auto');

    const next = () => {
        const s = STEPS;
        const cur = currentStep.value;

        if (cur === s.ENTRY) {
            currentStep.value = s.SELECT;
        }
        else if (cur === s.SELECT) {
            currentStep.value = selectedType.value === 'new' ? s.GROUP_NAME : s.SEARCH_GROUP;
        }
        else if (cur === s.GROUP_NAME) {
            currentStep.value = s.JOIN_METHOD;
        }
        else if (cur === s.JOIN_METHOD) {
            currentStep.value = selectedJoinMethod.value === 'auto' ? s.SET_DOMAIN : s.SET_ADMIN;
        }
        else if (cur === s.SET_DOMAIN || cur === s.SEARCH_GROUP) {
            currentStep.value = s.SET_ADMIN;
        }
        else if (cur === s.SET_ADMIN) {
            currentStep.value = s.VERIFY_EMAIL;
        }
        else if (cur === s.VERIFY_EMAIL) {
            currentStep.value = s.SET_USER_NAME;
        }
        else if (cur === s.SET_USER_NAME) {
            currentStep.value = s.DONE;
        }
    };

    const prev = () => {
        const s = STEPS;
        const cur = currentStep.value;

        if (cur === s.DONE) currentStep.value = s.SET_USER_NAME;
        else if (cur === s.SET_USER_NAME) currentStep.value = s.VERIFY_EMAIL;
        else if (cur === s.VERIFY_EMAIL) currentStep.value = s.SET_ADMIN;
        else if (cur === s.SET_ADMIN) {
            if (selectedType.value === 'join') {
                currentStep.value = s.SEARCH_GROUP;
            } else {
                currentStep.value = selectedJoinMethod.value === 'auto' ? s.SET_DOMAIN : s.JOIN_METHOD;
            }
        }
        else if (cur === s.SET_DOMAIN) currentStep.value = s.JOIN_METHOD;
        else if (cur === s.SEARCH_GROUP) currentStep.value = s.SELECT;
        else if (cur === s.JOIN_METHOD) currentStep.value = s.GROUP_NAME;
        else if (cur === s.GROUP_NAME) currentStep.value = s.SELECT;
        else if (cur === s.SELECT) currentStep.value = s.ENTRY;
    };

    return {
        currentStep,
        STEPS,
        selectedType,
        selectedJoinMethod,
        next,
        prev
    };
}