// Type definitions for react-hooks-helper 1.6
// Project: https://github.com/revelcw/react-hooks-helper#readme
// Definitions by: Joao Edmundo <https://github.com/jedmundo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

///<reference types="react"/>

export as namespace ReactHooksHelper;

export interface NavigationProps {
    next: () => void;
    previous?: () => void;
    go?: (step: number | string) => void;
    play?: () => void;
    pause?: () => void;
}

export interface UseStepParams {
    initialStep?: number;
    autoAdvanceDuration?: number;
    steps: string[] | number;
}

export interface UseStepResponse {
    autoAdvanceDuration: number;
    isPaused: boolean;
    index: number;
    step: number;
    navigation: NavigationProps;
}

export function useStep(params: UseStepParams): UseStepResponse;

interface FormTarget {
    target: {
        name: string, // object property name or Dot separated when hierarchical
        value: any,
        type?: string,
        checked?: boolean,
    }
}

export function useStep(params: UseStepParams): UseStepResponse

type InputChange = (event: React.SyntheticEvent<HTMLInputElement> | React.ChangeEvent<HTMLInputElement>) => void

type ChangeForm = (value: FormTarget) => any

export type SetForm = ChangeForm & InputChange

export function useForm<T>(defaultFormConfig: T): [T, SetForm]
