import { ref, reactive, watch } from 'vue';

const formData = reactive({
    groupName: '',
    joinMethod: 'auto', // 'auto' : 도메인, 'manual' : 수동 승인
    domain: '',
    adminEmail: '',
    adminPassword: '',
    adminConfirmPassword: '',
    searchQuery: '',
    memberEmail: '',
    memberPassword: '',
    memberConfirmPassword: '',
    verifyCode: '',
    userName: ''
});

const currentStep = ref('entry');
const selectedType = ref(null);

export function useOnboarding() {
    const STEPS = {
        ENTRY: 'entry',
        SELECT: 'select',
        GROUP_NAME: 'group_name',
        JOIN_METHOD: 'join_method',
        SET_DOMAIN: 'set_domain',
        SET_ADMIN: 'set_admin',
        SEARCH_GROUP: 'search_group',
        SET_MEMBER_EMAIL: 'set_member_email',
        SET_MEMBER_PASSWORD: 'set_member_password',
        VERIFY_EMAIL: 'verify_email',
        SET_USER_NAME: 'set_user_name',
        DONE: 'done'
    };

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
            currentStep.value = formData.joinMethod === 'auto' ? s.SET_DOMAIN : s.SET_ADMIN;
        }
        else if (cur === s.SET_DOMAIN) {
            currentStep.value = s.SET_ADMIN;
        }
        else if (cur === s.SET_ADMIN) {
            currentStep.value = s.VERIFY_EMAIL;
        }
        else if (cur === s.SEARCH_GROUP) {
            currentStep.value = s.SET_MEMBER_EMAIL;
        }
        else if (cur === s.SET_MEMBER_EMAIL) {
            currentStep.value = s.VERIFY_EMAIL;
        }
        else if (cur === s.VERIFY_EMAIL) {
            currentStep.value = selectedType.value === 'new' ? s.SET_USER_NAME : s.SET_MEMBER_PASSWORD;
        }
        else if (cur === s.SET_MEMBER_PASSWORD) {
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
        else if (cur === s.SET_USER_NAME) {
            currentStep.value = selectedType.value === 'new' ? s.VERIFY_EMAIL : s.SET_MEMBER_PASSWORD;
        }
        else if (cur === s.SET_MEMBER_PASSWORD) {
            currentStep.value = s.VERIFY_EMAIL;
        }
        else if (cur === s.VERIFY_EMAIL) {
            currentStep.value = selectedType.value === 'new' ? s.SET_ADMIN : s.SET_MEMBER_EMAIL;
        }
        else if (cur === s.SET_ADMIN) {
            if (formData.joinMethod === 'auto') currentStep.value = s.SET_DOMAIN;
            else currentStep.value = s.JOIN_METHOD;
        }
        else if (cur === s.SET_MEMBER_EMAIL) {
            currentStep.value = s.SEARCH_GROUP;
        }
        else if (cur === s.SET_DOMAIN) currentStep.value = s.JOIN_METHOD;
        else if (cur === s.JOIN_METHOD) currentStep.value = s.GROUP_NAME;
        else if (cur === s.SEARCH_GROUP || cur === s.GROUP_NAME) {
            currentStep.value = s.SELECT;
        }
        else if (cur === s.SELECT) {
            currentStep.value = s.ENTRY;
        }
    };

    const submitToBackend = async () => {
        console.log("최종 전송 데이터:", formData);
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ status: 200 });
            }, 1000);
        });
    };

    return {
        currentStep,
        STEPS,
        selectedType,
        formData,
        next,
        prev,
        submitToBackend
    };
}