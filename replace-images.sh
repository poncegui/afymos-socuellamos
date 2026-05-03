#!/bin/bash

# Script para reemplazar imágenes originales con versiones optimizadas

echo "🔄 Reemplazando imágenes originales con versiones optimizadas..."
echo ""

# Función para reemplazar
replace_image() {
    original=$1
    optimized="${original%.*}-optimized.${original##*.}"
    
    if [ -f "$optimized" ]; then
        echo "✅ Reemplazando: $(basename $original)"
        mv "$original" "${original%.*}-original.${original##*.}"
        mv "$optimized" "$original"
    fi
}

# Iconos de servicios
replace_image "src/views/Landing/components/assets/pictogramas/familia.png"
replace_image "src/views/Landing/components/assets/pictogramas/proteger.png"
replace_image "src/views/Landing/components/assets/pictogramas/vivienda-social.png"
replace_image "src/views/Landing/components/assets/pictogramas/educacion.png"
replace_image "src/views/Landing/components/assets/pictogramas/promocion.png"
replace_image "src/views/Landing/components/assets/pictogramas/apoyo.png"
replace_image "src/views/Landing/components/assets/pictogramas/historial-medico.png"
replace_image "src/views/terapias/components/assets/pictogramas/terapia-fisica.png"

# Iconos de donaciones
replace_image "src/views/Landing/assets/images-dontationInformation/80-removebg-preview.png"
replace_image "src/views/Landing/assets/images-dontationInformation/dinero-removebg-preview.png"
replace_image "src/views/Landing/assets/images-dontationInformation/grafico-2-removebg-preview.png"

# Logo
replace_image "src/components/Header/logos/logo-afymos.png"

# Cards de igualdad
replace_image "src/views/Landing/components/tePuedeInteresar/assets/icons/compromiso.png"
replace_image "src/views/Landing/components/tePuedeInteresar/assets/icons/institutoDeLaMujer.png"

echo ""
echo "✅ ¡Reemplazo completado!"
echo "📁 Las imágenes originales se guardaron con el sufijo -original"
