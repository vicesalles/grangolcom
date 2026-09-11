import styles from '../styles/YouTubeEmbed.module.scss'

export default function YouTubeEmbed({ videoId }) {
  if (!videoId) return null

  return (
    <div className={styles.wrapper}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className={styles.iframe}
      />
    </div>
  )
}
