import { DailyReqFallback, MinutleyReqFallback } from "./RequestsFallback"

const FallBackFactory = (type) => {
    switch (type) {
        case 'minutelyfallback':
            return (
                <>
                    <MinutleyReqFallback />
                </>
            )

        case 'dailyfallback':
            return (
                <>
                    <DailyReqFallback />
                </>
            )
    }
}

export default FallBackFactory