import { useParams } from 'react-router-dom';
import ComCasePage from './ComCasePage';
import FreeCasePage from './FreeCasePage';

export default function CasePageContainer() {
    const { id } = useParams();

    if (id.includes('free')) {
        return <FreeCasePage />;
    } else {
        return <ComCasePage />;
    }
}