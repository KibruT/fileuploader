module.exports = (sequelize, DataTypes) => {

    const Product = sequelize.define("product", {
        image: {
            type: DataTypes.STRING
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        size: {
            type: DataTypes.TEXT
        }
    
    })

    return Product

}