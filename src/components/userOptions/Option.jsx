export default function Option({ title, icon, infos , color}) {
    return (
        <div className={"option border border-neutral-900 px-4 py-2 rounded-2xl my-4 bg-" + color}>
            {/* Icône */}
            <i className={icon +  " mr-4 text-lg"}></i>

            {/* Titre */}
            <span className="title text-lg">{title}</span>

            <div className="infos ">
                {/* Infos supplémentaires */}
                {infos && (
                    <span className="infos">
                        {infos.name && <span>{infos.name}</span>}
                        {infos.email && <span>{infos.email}</span>}
                    </span>
                )}
            </div>
        </div>
    );
}
