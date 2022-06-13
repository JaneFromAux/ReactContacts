import ContactBaseItems from "./ContactBaseItems";
import data from "../data"

const ContactBase = () => {
    let randi = Math.floor(Math.random() * data.length);

    return (
        <div>

            <ContactBaseItems
                pictureUrl={data[randi].pictureUrl}
                name={data[randi].name}
                popularity={data[randi].popularity.toFixed(2)}
            />

        </div>
    );
}

export default ContactBase;