import { FlexItem, GradientPicker } from "@wordpress/components";

export function PickGradientControl({ props, setGradient }) {
    return (
        <FlexItem>
            <div className="control-label" style={{ marginTop: 16 }}>
                <h5>Preenchimento</h5>
            </div>
            <div className="gradient-picker">
                <GradientPicker
                    __nextHasNoMargin
                    value={props.attributes.gradient}
                    onChange={(currentGradient) => {
                        setGradient(currentGradient);
                        props.setAttributes({
                            gradient: currentGradient,
                        });
                    }}
                    gradients={[
                        {
                            name: "JShine",
                            gradient: "linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)",
                            slug: "jshine",
                        },
                        {
                            name: "Moonlit Asteroid",
                            gradient: "linear-gradient(135deg,#0F2027 0%, #203A43 0%, #2c5364 100%)",
                            slug: "moonlit-asteroid",
                        },
                        {
                            name: "Rastafarie",
                            gradient: "linear-gradient(135deg,#1E9600 0%, #FFF200 0%, #FF0000 100%)",
                            slug: "rastafari",
                        },
                    ]} />
            </div>
        </FlexItem>
    );
}
