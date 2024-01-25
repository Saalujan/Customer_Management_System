import React from 'react'

const CommonInput = ({ Label, Type, Name, Onchange, PlaceHolder, Disable, TextArea, error }) => {
    return (
        <>
            <div>
                <label className="form-label" htmlFor="inputAddAttribute-value">
                    {Label}
                </label>

                {TextArea ? (
                    <textarea
                        className="form-control"
                        rows="3"
                        name={Name}
                        onChange={Onchange}
                        placeholder={PlaceHolder}
                        disabled={Disable}
                        required

                    />
                ) : (
                    <input
                        type={Type}
                        name={Name}
                        className="form-control"
                        onChange={Onchange}
                        placeholder={PlaceHolder}
                        disabled={Disable}
                        required
                    />
                )}

            </div>
            <div>
                {error}
            </div>
        </>
    )
}

export default CommonInput