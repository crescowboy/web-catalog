
export const CONTACT_CONFIG = {
    whatsapp: {
        number: "573215410482",
        defaultMessage: "¡Hola Cowboy Studio! Quiero crear una figura 3D personalizada. ¿Me pueden dar más información?",
        
        
        getLink(productName?: string, category?: string) {
            let message = this.defaultMessage;

            if (productName) {
                message = `¡Hola! Me interesa la figura de *${productName}*${category ? ` de la categoría *${category}*` : ''}. Me gustaría recibir más información.`;
            }

            return `https://wa.me/${this.number}?text=${encodeURIComponent(message)}`;
        }
    },
};