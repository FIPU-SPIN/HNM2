export default function Footer() {
  return (
    <footer className="footer">
      <div className="footersadrzaj">
        <div className="footerlijevo">
          <img src="/assets/images/knjiga1.png" alt="KSTR" />
          <img src="/assets/images/knjiga2.png" alt="KSTR" />
          <img src="/assets/images/eunext.jpg" alt="EU" className="footer-logo" />
          <img src="/assets/images/ffpulogo.png" alt="FFPU" className="footer-logo" />
        </div>

        <div className="footerdesno">
          <a href="#">poveznica1</a>
          <a href="#">poveznica2</a>
        </div>
      </div>

      <div className="footerispod">©2025 Sva prava pridržana.</div>
    </footer>
  )
}