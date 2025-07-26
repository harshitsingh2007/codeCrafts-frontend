import {create} from 'zustand';

export const useTheme = create((set) => ({
    darkTheme: true,
    setDarkTheame:()=> set((state)=>({darkTheme: !state.darkTheme}))
}));