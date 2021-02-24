// import { studentType } from "../actions/types/studentType";

const initialState = {
    requests: [
        { name: 'Saurav', email: 'mail@mail.com', phone: 918741824, date: '2021/09/12', id: 74823487238723, paid: true, plan: 'yearly' },
        { name: 'Saurav', email: 'mail@mail.com', phone: 918741824, date: '2021/09/12', id: 74823487238723, paid: false, plan: 'monthly' },
        { name: 'saurab', email: 'mail@mail.com', phone: 918741824, date: '2021/09/12', id: 74823487238723, paid: true, plan: 'free' },
        { name: 'Bijay', email: 'mail@mail.com', phone: 918741824, date: '2021/09/12', id: 74823487238723, paid: false, plan: 'yearly' },
        { name: 'Ajaya', email: 'mail@mail.com', phone: 918741824, date: '2021/09/12', id: 74823487238723, paid: true, plan: 'halfYear' },
        { name: 'Kushal', email: 'mail@mail.com', phone: 918741824, date: '2021/09/12', id: 74823487238723, paid: true, plan: 'quater' },
        { name: 'Biraj', email: 'mail@mail.com', phone: 918741824, date: '2021/09/12', id: 74823487238723, paid: true, plan: 'fullLiscense' },
        { name: 'Manoj', email: 'mail@mail.com', phone: 918741824, date: '2021/09/12', id: 74823487238723, paid: false, plan: 'yearly' },
        { name: 'Saurav', email: 'mail@mail.com', phone: 918741824, date: '2021/09/12', id: 74823487238723, paid: false, plan: 'monthly' },
        { name: 'saurab', email: 'mail@mail.com', phone: 918741824, date: '2021/09/12', id: 74823487238723, paid: false, plan: 'free' },
        { name: 'Bijay', email: 'mail@mail.com', phone: 918741824, date: '2021/09/12', id: 74823487238723, paid: true, plan: 'yearly' },
        { name: 'Ajaya', email: 'mail@mail.com', phone: 918741824, date: '2021/09/12', id: 74823487238723, paid: true, plan: 'halfYear' },
        { name: 'Kushal', email: 'mail@mail.com', phone: 918741824, date: '2021/09/12', id: 74823487238723, paid: false, plan: 'quater' },
        { name: 'Biraj', email: 'mail@mail.com', phone: 918741824, date: '2021/09/12', id: 74823487238723, paid: true, plan: 'fullLiscense' },
        { name: 'Manoj', email: 'mail@mail.com', phone: 918741824, date: '2021/09/12', id: 74823487238723, paid: true, plan: 'yearly' },
        { name: 'Saurav', email: 'mail@mail.com', phone: 918741824, date: '2021/09/12', id: 74823487238723, paid: false, plan: 'monthly' },
        { name: 'saurab', email: 'mail@mail.com', phone: 918741824, date: '2021/09/12', id: 74823487238723, paid: true, plan: 'free' },
        { name: 'Bijay', email: 'mail@mail.com', phone: 918741824, date: '2021/09/12', id: 74823487238723, paid: true, plan: 'yearly' },
        { name: 'Ajaya', email: 'mail@mail.com', phone: 918741824, date: '2021/09/12', id: 74823487238723, paid: true, plan: 'halfYear' },
        { name: 'Kushal', email: 'mail@mail.com', phone: 918741824, date: '2021/09/12', id: 74823487238723, paid: true, plan: 'quater' },
        { name: 'Biraj', email: 'mail@mail.com', phone: 918741824, date: '2021/09/12', id: 74823487238723, paid: false, plan: 'fullLiscense' },
        { name: 'Manoj', email: 'mail@mail.com', phone: 918741824, date: '2021/09/12', id: 74823487238723, paid: true, plan: 'yearly' },
        { name: 'saurav', email: 'mail@mail.com', phone: 918741824, date: '2021/09/12', id: 74823487238723, paid: false, plan: 'yearly' },
    ],
};

export const registrationRequestReducer = (state = initialState, action) => {
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
        //         return {
        //             ...state,
        //             students: action.students,
        //         };
        default:
            return state;
    }
};
