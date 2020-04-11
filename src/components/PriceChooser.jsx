import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const { createSliderWithTooltip, Handle } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const handle = (props) => (
    <Handle value={props.value} />
);

const PriceChooser = (props) => (
        <React.Fragment>
            <div className="option-container">
                <div className="option-sub">
                    <p className="option-label">Votre budget achat</p>
                    <p className="chosen">de&nbsp;
                        <span>
                            {props.buyPrice.minBuyPrice}
                        </span>
                        &nbsp;à&nbsp;
                        <span>{props.buyPrice.maxBuyPrice}</span>
                        &nbsp;€
                    </p>
                </div>

                <Range
                    className="select"
                    min={0}
                    max={1250000}
                    defaultValue={[props.buyPrice.minBuyPrice, props.buyPrice.maxBuyPrice]}
                    marks={{ 500000: 500000, 1000000: 1000000 }}
                    allowCross={false}
                    handle={handle}
                    onChange={(values) => props.setBuyPrice({ minBuyPrice: values[0], maxBuyPrice: values[1] })}
                />
            </div>

            <div className="option-container">
                <div className="option-input">
                    <div className="option-sub">
                        <p className="option-label">Votre budget location</p>
                        <p className="chosen">de&nbsp;
                            <span>
                                {props.rentPrice.minRentPrice}
                            </span>
                            &nbsp;à&nbsp;
                            <span>{props.rentPrice.maxRentPrice}</span>
                            &nbsp;€
                        </p>
                    </div>

                    <Range
                        className="select"
                        min={0}
                        max={3000}
                        defaultValue={[props.rentPrice.minRentPrice, props.rentPrice.maxRentPrice]}
                        marks={{ 1000: 1000, 2000: 2000 }}
                        allowCross={false}
                        handle={handle}
                        onChange={(values) => props.setRentPrice({ minRentPrice: values[0], maxRentPrice: values[1] })}
                    />
                </div>
            </div>
        </React.Fragment>
    );

export default PriceChooser;
