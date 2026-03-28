
export const CONTACT_CONFIG = {
    whatsapp: {
        number: "573215410482",
        message: "¡Hola Cowboy Studio! Quiero crear una figura 3D personalizada. ¿Me pueden dar más información?",
        
        getLink() {
            return `https://wa.me/${this.number}?text=${encodeURIComponent(this.message)}`;
        }
    },
};