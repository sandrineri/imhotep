import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

const handle = (props) => {
    return (
        <Handle value={props.value} />
    );
};

const PriceChooser = (props) => {
    //console.log('PriceChooser props: ', props)
    
    return (
        <div className="options-container">
            <div className="option-container">
                <label className="option-label">Votre budget achat</label>
                <Range
                    min={0}
                    max={2000000}
                    defaultValue={[props.buyPrice.minBuyPrice, props.buyPrice.maxBuyPrice]}
                    marks={{ 0: 0, 500000: 500000, 1000000: 1000000, 1500000: 1500000, 2000000: 2000000 }}
                    allowCross={false}
                    handle={handle}
                    onChange={(values) => props.setBuyPrice({ minBuyPrice: values[0], maxBuyPrice: values[1] })}
                />
            </div>

            <div className="option-container">
                <div className="option-input">
                    <label className="option-label">Votre budget location</label>
                    <Range
                        min={0}
                        max={5000}
                        defaultValue={[props.rentPrice.minRentPrice, props.rentPrice.maxRentPrice]}
                        marks={{ 0: 0, 1000: 1000, 2000: 2000, 3000: 3000, 4000: 4000, 5000: 5000 }}
                        allowCross={false}
                        handle={handle}
                        onChange={(values) => props.setRentPrice({ minRentPrice: values[0], maxRentPrice: values[1] })}
                    />
                </div>
            </div>
        </div>
    )
}

export default PriceChooser;