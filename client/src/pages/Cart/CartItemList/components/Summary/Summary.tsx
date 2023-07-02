import { Button, Divider, Typography } from "antd";
import './Summary.scss'

interface SummaryProps {
    total: number,
    onSubmitCartItems: () => void,
}
export const Summary = ({ total, onSubmitCartItems }: SummaryProps) => (
    <>
        <Divider />
        <div className="summary-total-bar">
            <Typography.Title level={2} className="total-text-width">
                Total
            </Typography.Title>
            <Typography.Title level={2} className="summary-amount">
                {total} $
            </Typography.Title>
        </div>
        <Button className="submit-button" onClick={onSubmitCartItems}>
            Submit
        </Button>
        <Divider />
    </>
)