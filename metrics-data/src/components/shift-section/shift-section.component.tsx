// Libraries
import { FC } from "react";

// Utilities
import { MetricsData } from "../../types";

interface ShiftSectionProps {
    data: MetricsData[];
}

const ShiftSection: FC<ShiftSectionProps> = () => (
    <h2>Shift</h2>
);

export default ShiftSection;