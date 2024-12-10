import { RotatingLines } from "react-loader-spinner"

import styles from "./Loader.module.css"


function Loader() {
  return (
    <div className={styles.loader}>
        < RotatingLines width="150px" height="150px" strokeWidth="2" strokeColor="#fe5d42" />
    </div>
  )
}

export default Loader