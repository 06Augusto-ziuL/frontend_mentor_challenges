const viewImageButton = document.getElementById("hoverView")
const imageViewerDiv = document.getElementById("imageViewer")
const closeImageButton = document.getElementById("close")


viewImageButton.addEventListener("click", () => {
    imageViewerDiv.style.display = "flex"
})

closeImageButton.addEventListener("click", () => {
    imageViewerDiv.style.display = "none"
})