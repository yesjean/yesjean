import Link from "next/link";
import { motion } from "framer-motion";

export default function Layout({ children, pageOpts }) {
  const { pageMap } = pageOpts;

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#1d1d1d", // 다크 모드 배경색
        color: "#f5f5f5", // 다크 모드 텍스트 색상
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <header
        style={{
          backgroundColor: "#323334",
          padding: "1rem",
          color: "#fff",
          textAlign: "center",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h1 style={{ margin: 0, fontSize: "2.5rem", letterSpacing: "2px" }}>
          My Blog
        </h1>
      </header>
      <div style={{ display: 'flex', flex: 1 }}>
        <aside
          style={{
            width: "180px",
            backgroundColor: "#48494b",
            padding: "1rem",
            boxShadow: "2px 0 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2 style={{ color: "#fff", textAlign: "center" }}>Menu</h2>
          <nav style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {pageMap.map((item) => (
              <div key={item.name}>
                <motion.div
                  whileHover={{ scale: 1.05, backgroundColor: "#323334" }}
                  style={{
                    padding: "0.5rem",
                    borderRadius: "5px",
                    transition: "background-color 0.3s",
                  }}
                >
                  <Link
                    href={item.route}
                    style={{
                      textDecoration: "none",
                      color: "#fff",
                      fontWeight: "bold",
                      width: '100%',
                      display: 'inline-block',
                    }}
                  >
                    {item.name}
                  </Link>
                </motion.div>
                {/* 자식 항목이 있을 경우 */}
                {item.children && (
                  <div style={{ paddingLeft: "1rem" }}>
                    {item.children.map((child) => (
                      <motion.div
                        key={child.name}
                        whileHover={{ scale: 1.05, backgroundColor: "#323334" }}
                        style={{
                          padding: "0.5rem",
                          borderRadius: "5px",
                          transition: "background-color 0.3s",
                        }}
                      >
                        <Link
                          href={child.route}
                          style={{
                            textDecoration: "none",
                            color: "#fff",
                            fontWeight: "bold",
                            width: '100%',
                            display: 'inline-block',
                          }}
                        >
                          {child.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </aside>

        <div style={{ flex: 1 }}>
          <main
            style={{
              padding: "1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              minHeight: 'calc(100vh - 180px)',
            }}
          >
            <div
              style={{
                border: "1px solid #444",
                borderRadius: "10px",
                padding: "2rem",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                backgroundColor: "#fff",
                color: "#000", // 콘텐츠 텍스트 색상
                width: "90%",
                maxWidth: "800px",
                flex: 1
              }}
            >
              {children}
            </div>
          </main>

          <footer
            style={{
              textAlign: "center",
              padding: "1rem",
              backgroundColor: "#323334",
              color: "#fff",
              marginTop: "auto",
              boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            <p>© 2024 My Awesome Blog</p>
          </footer>
        </div>
      </div>
    </div>
  );
}
