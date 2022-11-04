import { InfinitySpin } from 'react-loader-spinner'
import styles from './Details.module.scss'

const Details = ({ip, location, isp, error = null, loading = 'idle'}) => {

  return (
    <div className={styles.result}>
      {loading === 'loading' && 
      <div className={styles.container}>
        <div className={styles.details}>
          <div className={styles.titleError}>Loading...</div>
          <div className={styles.spinner}>
          <InfinitySpin
            width='170'
            color="#2b2b2b"
          />
          </div>
        </div>
      </div>
      }
      {error && 
      <div className={styles.container}>
        <div className={styles.details}>
          <div className={styles.titleError}>An Error Occured...</div>
          <div className={styles.detError}>{error}</div>
        </div>
      </div>
      }
      {ip &&
      <div className={styles.container}>
        <div className={styles.details}>
          <div className={styles.title}>IP Address</div>
          <div className={styles.det}>{ip}</div>
        </div>
        <div className={styles.details}>
          <div className={styles.title}>Location</div>
          <div className={styles.det}>{`${location.region}, ${location.country} ${location.postalCode}`}</div>
        </div>
        <div className={styles.details}>
          <div className={styles.title}>Timezone</div>
          <div className={styles.det}>{`UTC ${location.timezone}`}</div>
          </div>
        <div className={styles.details}>
          <div className={styles.title}>ISP</div>
          <div className={styles.det}>{isp}</div>
        </div>
      </div>
      }
    </div>
  )
}

export default Details