"use client";
import { Provider } from 'react-redux';
import { store } from '@/Redux/app/store';
import { ReactNode, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setLoginState } from '@/Redux/feature/authSlice/authSlice';
import { supabase } from '@/utils/supabase';

interface MyAppType {
    children: ReactNode;
}

function MyApp({ children }: MyAppType) {
    const dispatch = useDispatch();

    useEffect(() => {
        const checkSession = async () => {
            const { data, error } = await supabase.auth.getUser();
            if(error){
                return dispatch(setLoginState({ isLoggedIn: false, user: null }));
                
            }
            if (data) {
                dispatch(
                    setLoginState({
                        isLoggedIn: true,
                        user: data.user?.user_metadata,
                    })
                );
            } else {
                return dispatch(setLoginState({ isLoggedIn: false, user: null }));
            }
        };

        checkSession();
    }, [dispatch]);

    return <>{children}</>;
}

const AppProvider = ({ children }: MyAppType) => (
    <Provider store={store}>
        <MyApp>{children}</MyApp>
    </Provider>
);

export default AppProvider;


