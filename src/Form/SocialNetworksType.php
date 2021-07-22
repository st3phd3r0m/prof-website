<?php

namespace App\Form;

use App\Entity\SocialNetworks;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\UrlType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\Url;

class SocialNetworksType extends AbstractType
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
            ->add('title', TextType::class, [
                'required' => true,
                'label' => 'Titre : ',

                // 'constraints' => [
                //     new NotBlank([
                //         'message' => 'Veuillez saisir une chaine de caractères.',
                //     ]),
                // ]
            ])
            ->add('logo', TextareaType::class, [
                'required' => true,
                'label' => 'Logo du lien : ',
                // 'constraints' => [
                //     new NotBlank([
                //         'message' => 'Veuillez saisir une chaine de caractères.',
                //     ]),
                // ]
            ])
            ->add('url', UrlType::class, [
                'required' => true,
                'label' => 'Url',
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez saisir l\'url',
                    ]),
                    new Url([
                        'message' => 'Veuillez saisir l\'url',
                    ]),
                ],
            ])
            ->add('cv_or_site', ChoiceType::class, [
                'label' => 'visible sur le cv ou sur le site ? ',
                'required' => true,
                'choices' => [
                    'Les deux' => 0,
                    'Sur le cv' => 1,
                    'Sur le site' => 2,
                ],
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => SocialNetworks::class,
        ]);
    }
}
