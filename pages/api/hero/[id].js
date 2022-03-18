import dbConnect from "../../../db/dbConnect";
import Hero from "../../../models/Hero";

// DB Connection
dbConnect();

// NextJS Way
// get a unique record, edit, delete
export default async (req, res) => {
  const {
    method,
    query: { id },
  } = req;

  switch (method) {
    case `GET`:
      try {
        const hero = await Hero.findById(id);

        if (!hero) {
          res.status(400).json({
            success: false,
          });
        }

        res.status(200).json({
          success: true,
          hero,
        });
      } catch (error) {
        console.log("ERROR", error);

        res.status(400).json({
          success: false,
        });
      }
      break;

    case `PUT`:
      try {
        const hero = await Hero.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });

        if (!hero) {
          res.status(400).json({
            success: false,
          });
        }

        res.status(200).json({
          success: true,
          hero,
        });
      } catch (error) {
        console.log("ERROR", error);

        res.status(400).json({
          success: false,
        });
      }
      break;

    case `DELETE`:
      try {
        const hero = await Hero.deleteOne({ _id: id });

        if (!hero) {
          res.status(400).json({
            success: false,
          });
        }

        res.status(200).json({
          success: true,
          hero,
        });
      } catch (error) {
        console.log("ERROR", error);

        res.status(400).json({
          success: false,
        });
      }
      break;

    default:
      res.status(400).json({
        success: false,
      });
      break;
  }
};
