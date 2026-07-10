from fastapi import APIRouter, UploadFile, File

router = APIRouter()

@router.post("/imports/csv")
async def import_csv(file: UploadFile = File(...)):
    contents = await file.read()

    return {
        "filename": file.filename,
        "size": len(contents),
        "status": "uploaded",
    }