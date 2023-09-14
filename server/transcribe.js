import { pipeline } from "@xenova/transformers"

import { transcriptionExample } from "./utils/transcription.js"
export async function transcribe(audio) {
  //return transcriptionExample

  try {
    console.log("Realizando a transcrição do vídeo...")
    const transcribe = await pipeline(
      "automatic-speech-recognition",
      "Xenova/whisper-small"
    )

    const transcription = await transcribe(audio, {
      chunk_lenght_s: 30,
      stride_lenght_s: 5,
      language: "portuguese",
      tank: "transcribe",
    })

    console.log("Transcrição finalizada com sucesso.")
    return transcription?.text.replace("[Música]", "")
  } catch (error) {
    throw new Error(error)
  }
}
