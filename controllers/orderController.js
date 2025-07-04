import Order from "../models/order.js";

export function createOrder(req, res) {

    if (req.body == null) {
        res.status(404).json({
            message: "unauthorized"
        })
        return;
    }
    const body = req.body;

    const orderData = {
        orderId: "",
        email: req.user.email,
        name: body.name,
        address: body.address,
        phoneNumber: body.phoneNumber,
        billItems: [],
        total: 0
    }
    Order.find().sort({
        date: -1
    }).limit(1).then((lastBills) => {
        if (lastBills.length == 0) {
            orderData.orderId = "ORD0001";
        } else {
            const lastBill = lastBills[0];
            const lastOrderId = lastBill.orderId; //this come with string 
            const lastOrderIdNumber = lastOrderId.replace("ORD", ""); //this come with number ORD0001 satOrderId.replace("ORD", "");
            const lastOderNumberInt = parseInt(lastOrderIdNumber); //this come with number
            const newOrderNumberInt = lastOderNumberInt + 1;
            const newOrderNumberStr = newOrderNumberInt.toString().padStart(4, '0'); //this come with string ORD0001 satOrderId.replace("ORD", "");ewOrderNumberInt).padStart(4, '0');
            orderData.orderId = "ORD" + newOrderNumberStr;
        }
        const order = new Order(orderData);

        order.save().then(() => {
            res.json({
                message: "Order created successfully"
            })
        }).catch((err) => {
            res.status(500).json({
                message: "Order not created"
            });
        });

    });

}

export function getOrders(req, res) {
    if (req.user == null) {
        res.status(404).json({
            message: "unauthorized"
        })
        return;
    }
    if (req.user.role == "admin") {
        Order.find().then(
            (orders) => {
                res.json(orders)
            }).catch((err) => {
                res.status(500).json({
                    message: "Orders not found"
                });
            });
    } else {
        Order.find({
            email: req.user.email
        }).then(
            (orders) => {
                res.json(orders)
            }).catch((err) => {
                res.status(500).json({
                    message: "Orders not found"
                });
            });
    }
}
