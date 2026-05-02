import Swal from "sweetalert2"

export const showSuccess = (title: string, text?: string) => {
  return Swal.fire({
    icon: "success",
    title,
    text,
    timer: 2000,
    showConfirmButton: false,
    background: "#ffffff",
    color: "#000000",
  })
}

export const showError = (title: string, text?: string) => {
  return Swal.fire({
    icon: "error",
    title,
    text,
    background: "#ffffff",
    color: "#000000",
  })
}

export const showCopied = () => {
  return Swal.fire({
    icon: "success",
    title: "Copied!",
    timer: 1500,
    showConfirmButton: false,
    toast: true,
    position: "top-end",
  })
}
