import { FC, ReactNode } from "react";
import {
    SectionContainer,
    SectionContentContainer
} from "./section.styles";


interface SectionProps {
    children: ReactNode;
    title: string;
};

/**
 * Creates a section tag
 */
const Section: FC<SectionProps> = ({ children, title }) => (
    <SectionContainer>
        <h2>{title}</h2>
        <SectionContentContainer>
            {children}
        </SectionContentContainer>
    </SectionContainer>
);

export default Section;