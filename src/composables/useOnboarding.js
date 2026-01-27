import { ref } from 'vue';

export function useOnboarding() {
    const STEPS = {
        ENTRY: 'entry',
        SELECT: 'select',
        // 매니저 흐름
        GROUP_NAME: 'group_name',
        JOIN_METHOD: 'join_method',
        SET_DOMAIN: 'set_domain',
        SET_ADMIN: 'set_admin',
        // 멤버 흐름
        SEARCH_GROUP: 'search_group',
        SET_MEMBER_EMAIL: 'set_member_email',
        SET_MEMBER_PASSWORD: 'set_member_password',
        // 공통
        VERIFY_EMAIL: 'verify_email',
        SET_USER_NAME: 'set_user_name',
        DONE: 'done'
    };

    const currentStep = ref(STEPS.ENTRY);
    const selectedType = ref(null); // 'new' (매니저) or 'join' (멤버)
    const selectedJoinMethod = ref('auto'); // 매니저가 설정하는 가입 방식
    const groupJoinType = ref('auto'); // 멤버가 참여하려는 공간의 가입 방식

    const next = () => {
        const s = STEPS;
        const cur = currentStep.value;

        // 1. 초기 진입 및 역할 선택
        if (cur === s.ENTRY) {
            currentStep.value = s.SELECT;
        }
        else if (cur === s.SELECT) {
            currentStep.value = selectedType.value === 'new' ? s.GROUP_NAME : s.SEARCH_GROUP;
        }

        // 2. 매니저(공간 생성) 흐름
        else if (cur === s.GROUP_NAME) {
            currentStep.value = s.JOIN_METHOD;
        }
        else if (cur === s.JOIN_METHOD) {
            currentStep.value = selectedJoinMethod.value === 'auto' ? s.SET_DOMAIN : s.SET_ADMIN;
        }
        else if (cur === s.SET_DOMAIN) {
            currentStep.value = s.SET_ADMIN;
        }
        else if (cur === s.SET_ADMIN) {
            currentStep.value = s.VERIFY_EMAIL;
        }

        // 3. 멤버(공간 참여) 흐름
        else if (cur === s.SEARCH_GROUP) {
            // 여기서 실제로는 선택한 공간의 타입에 따라 groupJoinType.value를 업데이트해야 함
            currentStep.value = s.SET_MEMBER_EMAIL;
        }
        else if (cur === s.SET_MEMBER_EMAIL) {
            currentStep.value = s.VERIFY_EMAIL;
        }
        else if (cur === s.VERIFY_EMAIL) {
            // 매니저는 인증 후 바로 이름 설정, 멤버는 비밀번호 설정 단계 필요
            currentStep.value = selectedType.value === 'new' ? s.SET_USER_NAME : s.SET_MEMBER_PASSWORD;
        }
        else if (cur === s.SET_MEMBER_PASSWORD) {
            currentStep.value = s.SET_USER_NAME;
        }

        // 4. 공통 마무리
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
            if (selectedJoinMethod.value === 'auto') currentStep.value = s.SET_DOMAIN;
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

    return {
        currentStep,
        STEPS,
        selectedType,
        selectedJoinMethod,
        groupJoinType,
        next,
        prev
    };
}