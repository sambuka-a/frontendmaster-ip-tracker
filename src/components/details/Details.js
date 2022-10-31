import {DateTime} from 'luxon'
import { InfinitySpin } from 'react-loader-spinner'
import styles from './Details.module.scss'

const Details = ({query, regionName, city, zip, timezone, isp, status, message, error, loading = 'idle'}) => {
  
  const UTCTime = DateTime.now().setZone(timezone).toISO()

  return (
    <div className={styles.result}>
      {loading === 'loading' && 
      <div className={styles.container}>
        <div className={styles.details}>
          <div className={styles.titleError}>Loading...</div>
          <div>
          <InfinitySpin 
            width='200'
            color="#2b2b2b"
          />
          </div>
        </div>
      </div>
      }
      {(status === 'fail' || error) && 
      <div className={styles.container}>
        <div className={styles.details}>
          <div className={styles.titleError}>An Error Occured...</div>
          <div className={styles.detError}>{message || error}</div>
        </div>
      </div>
      }
      {status === 'success' && 
      <div className={styles.container}>
        <div className={styles.details}>
          <div className={styles.title}>IP Address</div>
          <div className={styles.det}>{query}</div>
        </div>
        <div className={styles.details}>
          <div className={styles.title}>Location</div>
          <div className={styles.det}>{`${regionName}, ${city}, ${zip}`}</div>
        </div>
        <div className={styles.details}>
          <div className={styles.title}>Timezone</div>
          <div className={styles.det}>{`UTC ${UTCTime.slice(-6)}`}</div>
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