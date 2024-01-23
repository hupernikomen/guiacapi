import { Request, Response } from 'express';
import { UpdateFoodService } from '../../services/food/UpdateFoodService';

class UpdateFoodController {
  async handle(req: Request, res: Response) {
    const userID = req.query.userID as string;
    const { name, bio, address, district, delivery } = req.body;

    const updateFoodService = new UpdateFoodService();
    await updateFoodService.execute({
      userID,
      avatar: req.file,
      name,
      bio,
      address,
      district,
      delivery: Boolean(delivery)
    });

    return res.status(200).json({ message: 'Food Atualizado' });
  }
}

export { UpdateFoodController };
