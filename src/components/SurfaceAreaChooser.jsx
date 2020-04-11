import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const { createSliderWithTooltip, Handle } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const handle = (props) => (
    <Handle value={props.value} />
);


const SurfaceAreaChooser = (props) => (
    <div className="option-container">
        <div className="option-sub">
            <p className="option-label">Superficie souhaitée</p>
            <p className="chosen">de&nbsp;
                <span>
                    {props.surfaceArea.min}
                </span>
                &nbsp;à&nbsp;
                <span>{props.surfaceArea.max}</span>
                &nbsp;m²
            </p>
        </div>

        <Range
            className="select"
            min={0}
            max={210}
            defaultValue={[props.surfaceArea.min, props.surfaceArea.max]}
            marks={{ 50: 50, 100: 100, 150: 150 }}
            allowCross={false}
            handle={handle}
            onChange={(values) => props.setSurfaceArea({ min: values[0], max: values[1] })}
        />
    </div>
);

export default SurfaceAreaChooser;
