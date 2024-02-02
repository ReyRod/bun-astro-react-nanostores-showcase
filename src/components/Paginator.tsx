export default function Paginator({
  prevUrl,
  currentPage,
  nextUrl,
}: {
  prevUrl?: string;
  currentPage: number;
  nextUrl?: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "5px",
        marginTop: "20px",
        marginBottom: "50px",
      }}
    >
      {prevUrl ? (
        <a
          style={{
            minWidth: "80px",
            padding: "4px",
            borderRadius: "8px",
            backgroundColor: "white",
            color: "black",
            textDecoration: "none",
            textAlign: "center",
          }}
          href={prevUrl}
        >
          Previous
        </a>
      ) : (
        <div
          style={{
            minWidth: "80px",
            padding: "4px",
          }}
        />
      )}

      <span
        style={{
          padding: "4px",
          borderRadius: "8px",
          backgroundColor: "white",
          marginLeft: "2px",
          color: "black",
          fontWeight: "bold",
          minWidth: "30px",
          textAlign: "center",
        }}
      >
        {currentPage}
      </span>

      {nextUrl ? (
        <a
          style={{
            minWidth: "80px",
            padding: "4px",
            borderRadius: "8px",
            backgroundColor: "white",
            color: "black",
            textDecoration: "none",
            textAlign: "center",
          }}
          href={nextUrl}
        >
          Next
        </a>
      ) : (
        <div
          style={{
            minWidth: "80px",
            padding: "4px",
          }}
        />
      )}
    </div>
  );
}
