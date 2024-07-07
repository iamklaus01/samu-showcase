/* eslint-disable react/prop-types */
import { Button } from "primereact/button";

const LoadingButton = ({label, loading, bg_color="bg-secondary"}) => {

    return (
      <div className="flex justify-center items-center my-4">
        <Button className={`rounded ${bg_color} text-white px-4 py-2`} label={label} loading={loading} />
      </div>
    )
}

export default LoadingButton;


