export default function Tache(props) {
    return (
        <div>
            <p className="text-xl font-bold">{props.HeureDebut}</p>
            <div className="container ml-auto mr-4 flex h-28 w-40 items-center justify-center rounded-3xl bg-orange-200">
                <p className="align-middle text-center text-2xl font-bold drop-shadow-xl">{props.action}</p>
            </div>
            <p className="text-xl font-bold">{props.HeureFin}</p>
        </div>
    );
}
