export default function Tache(props) {
    return (
        <div>
            <p class="text-xl font-bold">{props.temps}</p>
            <div class={"ml-auto mr-4 flex h-28 w-40 items-center justify-center rounded-3xl bg-"+props.couleur}>
                <p class="align-middle text-center text-2xl font-bold drop-shadow-xl">{props.action}</p>
            </div>
        </div>
    );
}
