import Card from "./feature/Card";
import { cardItems } from "./feature/cardData";

export default function Feature() {
    return (
        <div className="flex lg:flex-row flex-col w-full lg:px-12 px-9 lg:h-auto h-[1500px] justify-between items-center pt-10">
            {
                cardItems.map(({ title, image, body }) => {
                return <Card key={title} title={title} image={image} body={body} />
            } )
            }
        </div>
    )
}