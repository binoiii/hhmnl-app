import React from "react"
import PropTypes from "prop-types"

const OrderSummaryFonts = ({ engraveDetails }) => {
  return (
    <div className="mb-8 h-72 overflow-y-auto">
      <table className="mb-8 table-auto w-80 overflow-y-auto">
        <thead>
          <tr>
            <th className="font-primary text-sm text-orange-450 font-medium">
              Name
            </th>
            <th className="font-primary text-sm text-orange-450 font-medium">
              Font
            </th>
            <th className="font-primary text-sm text-orange-450 font-medium">
              Result
            </th>
          </tr>
        </thead>
        <tbody>
          {engraveDetails &&
            engraveDetails.map(({ engraveID, name: engraveName, font }) => {
              const modifiedFont = font.replace("font-", "")

              return (
                <tr key={engraveID}>
                  <td className="font-primary text-sm text-center">
                    {engraveName}
                  </td>
                  <td className={`${font} text-sm text-center`}>
                    {modifiedFont}
                  </td>
                  <td className={`${font} text-sm text-center`}>
                    {engraveName}
                  </td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}

OrderSummaryFonts.propTypes = {
  engraveDetails: PropTypes.array.isRequired,
}

export default OrderSummaryFonts
