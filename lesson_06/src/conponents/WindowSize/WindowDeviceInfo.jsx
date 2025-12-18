function WindowDeviceInfo({ device, width, height }) {
    const { name, imgSrc } = device[0]
    return (
        <div className="size__element">
            <img src={imgSrc} alt={name} />
            <div className="size__descroption">
                <h3>{name}</h3>
                <p>Width: <span>{width}</span> px</p>
                <p>Height: <span>{height}</span> px</p>
            </div>
        </div>
    );
}

export default WindowDeviceInfo;