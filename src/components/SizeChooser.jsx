import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
//import Tooltip from 'rc-tooltip';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

const handle = (props) => {
    return (
        <Handle value={props.value} />
    );
};


const SizeChooser = (props) => {
    //console.log('SizeChooser: ', props);

    return (
        <div className="option-container">
            <label className="option-label">Superficie souhaitée</label>
            <div className="range">
                <Range
                    min={0}
                    max={200}
                    defaultValue={[props.size.min, props.size.max]}
                    marks={{ 0: 0, 50: 50, 100: 100, 150: 150, 200: 200 }}
                    allowCross={false}
                    handle={handle}
                    onChange={(values) => props.setSize({ min: values[0], max: values[1] })}
                />
            </div>
            <div>
                <p>Entre&nbsp;
                    <span>
                        {props.size.min}
                    </span>
                    &nbsp;et&nbsp;
                    <span>{props.size.max}</span>
                    &nbsp;m²
                </p>
            </div>
        </div>
    )
}

export default SizeChooser;