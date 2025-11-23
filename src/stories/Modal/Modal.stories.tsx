import type { StoryObj } from "@storybook/react";
import {type ModalState} from "./ModalContext.tsx";
import {ModalProvider} from "./ModalProvider.tsx"
import type {Args, PartialStoryFn} from "storybook/internal/csf";
import type { ModalComponent } from "./ModalComponent.tsx";

export const createDecorator = (defaultState?: Partial<ModalState>) {
    return function Decorator(Story: PartialStoryFn<any, Args>) {
        return (
            <ModalProvider defaultState={{...defaultState, isShown: true}}>
                <Story />
            </ModalProvider>
        )
    }
}

type Story = StoryObj<typeof ModalComponent>;

export const Succeed: Story = {
    decorators: [
        createDecorator({
            message: "성공입니다.",
            style: "succeed",
        }),
    ],
};

export const Failed: Story = {
    decorators: [
        createDecorator({
            message: "실패입니다.",
            style: "failed",
        }),
    ],
};

export const Busy: Story = {
    decorators: [
        createDecorator({
            message: "처리중입니다.",
            style: "busy",
        }),
    ],
};
