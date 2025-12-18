import useWindowSize from "../../hooks/useWindowSize";
import WindowDeviceInfo from "./WindowDeviceInfo";

function SizeMansger({ deviceList }) {
    const { width, height, deviceType } = useWindowSize()
    const device = deviceList.filter(el => el.type === deviceType)
    return (
        <section className="size">
            <h2>Window size</h2>
            <div className="size__wrap">
                <WindowDeviceInfo
                    device={device}
                    width={width}
                    height={height}
                />
            </div>
        </section>
    );
}

export default SizeMansger;