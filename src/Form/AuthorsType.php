<?php

namespace App\Form;

use App\Entity\Authors;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;

class AuthorsType extends AbstractType
{
    /**
     * Undocumented function.
     *
     * @param array<string, mixed> $options
     *
     * @return void
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', TextType::class, [
                'required' => true,
                'label' => 'Nom de l\'auteur : ',
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez saisir un nom.',
                    ]),
                    new Length([
                        'min' => 4,
                        'minMessage' => 'Le nom doit comporter au minimum {{ limit }} caractères.',
                    ]),
                ],
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Authors::class,
        ]);
    }
}
