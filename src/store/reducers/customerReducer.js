// import { studentType } from "../actions/types/studentType";

const initialState = {
    customers: [
        { name: 'Saurav', status: 'active', phone: 2756293875, plan: 'yearly', email: 'mail@mail.com', subscribedDate: '2022/12/23' },
        { name: 'Saurav', status: 'active', phone: 2756293875, plan: 'monthly', email: 'mail@mail.com', subscribedDate: '2022/12/23' },
        { name: 'saurab', status: 'expired', phone: 2756293875, plan: 'quaterly', email: 'mail@mail.com', subscribedDate: '2022/12/23' },
        { name: 'Bijay', status: 'active', phone: 2756293875, plan: 'semi-annualy', email: 'mail@mail.com', subscribedDate: '2022/12/23' },
        { name: 'Ajaya', status: 'expired', phone: 2756293875, plan: 'yearly', email: 'mail@mail.com', subscribedDate: '2022/12/23' },
        { name: 'Kushal', status: 'active', phone: 2756293875, plan: 'semi-annualy', email: 'mail@mail.com', subscribedDate: '2022/12/23' },
        { name: 'Biraj', status: 'expired', phone: 2756293875, plan: 'yearly', email: 'mail@mail.com', subscribedDate: '2022/12/23' },
        { name: 'Manoj', status: 'active', phone: 2756293875, plan: 'monthly', email: 'mail@mail.com', subscribedDate: '2022/12/23' },
        { name: 'Manoj', status: 'active', phone: 2756293875, plan: 'semi-annualy', email: 'mail@mail.com', subscribedDate: '2022/12/23' },
        { name: 'Manoj', status: 'active', phone: 2756293875, plan: 'yearly', email: 'mail@mail.com', subscribedDate: '2022/12/23' },
        { name: 'saurav', status: 'expired', phone: 2756293875, plan: 'quaterly', email: 'mail@mail.com', subscribedDate: '2022/12/23' },
    ],
};

export const customerReducer = (state = initialState, action) => {
    switch (action.type) {
        //     case studentType.GET_STUDENTS_DETAIL:
        //         return { ...state, students: action.students };

        //     case studentType.GET_PARTICIPANTS:
        //         return { ...state, participants: action.students };

        //     case studentType.GET_LATEST_STUDENTS:
        //         return { ...state, students: action.students };

        //     case studentType.GET_STUDENT_DETAIL:
        //         return { ...state, student: action.student };

        //     case studentType.REMOVE_STUDENT:
        //         return {
        //             ...state,
        //             students: state.students.filter(
        //                 (student) => student.id !== action.students
        //             ),
        //         };
        //     case studentType.UPDATE_STATUS:
        //         return, phone: 2756293875, plan: 'yearly', email: 'mail@mail.com', subscribedDate: '2022/12/23' {
        //             ...state,
        //             students: action.students,
        //         };
        default:
            return state;
    }
};
