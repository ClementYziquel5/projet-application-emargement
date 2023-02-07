<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Persistence\ManagerRegistry;

use Nelmio\ApiDocBundle\Annotation\Model;
use Nelmio\ApiDocBundle\Annotation\Security;
use OpenApi\Annotations as OA;


use App\Entity\Groupe;
use App\Entity\Promo;
use App\Entity\Etudiant;
use App\Entity\Salle;
use App\Entity\Matiere;
use App\Entity\Staff;
use App\Entity\Type;
use App\Entity\Session;


#[Route('/api/v1.0', name: 'api_')]
class ApiController extends AbstractController
{
    private $doctrine;
    public function __construct(ManagerRegistry $doctrine)
    {
        $this->doctrine = $doctrine;
    }

    /**
     * Récupérer les groupes
     * 
     * @OA\Response(
     *    response=200,
     *    description="Retourne la liste des groupes",
     *    @OA\JsonContent(
     *       type="array",
     *       @OA\Items(
     *         type="object",
     *         @OA\Property(property="id", type="integer"),
     *         @OA\Property(property="groupe", type="string")
     *       )
     *    )
     * )
     * 
     * @OA\Tag(name="Groupe")
     */
    #[Route('/groupes', name: 'groupe',methods: ['GET'])]
    public function getAllGroupes(): Response
    {
        $groupes = $this->doctrine->getRepository(Groupe::class)->findAll();

        $response = new Response();
        $response->setContent(json_encode($groupes));
        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');
        return $response;
    }

    /**
     * Récupérer la liste des promotions
     * 
     * @OA\Response(
     *    response=200,
     *    description="Retourne la liste des promotions",
     *    @OA\JsonContent(
     *       type="array",
     *       @OA\Items(
     *         type="object",
     *         @OA\Property(property="promo", type="integer")
     *       )
     *    )
     * )
     * 
     * @OA\Tag(name="Promo")
     */
    #[Route('/promos', name: 'promo',methods: ['GET'])]
    public function getAllPromos(): Response
    {
        $promos = $this->doctrine->getRepository(Promo::class)->findAll();

        $response = new Response();
        $response->setContent(json_encode($promos));
        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');
        return $response;
    }

    /**
     * Récupérer les étudiants d'un groupe
     * 
     * @OA\Response(
     *    response=200,
     *    description="Retourne les étudiants d'un groupe",
     *    @OA\JsonContent(
     *       type="array",
     *       @OA\Items(
     *         type="object",
     *         @OA\Property(property="ine", type="string"),
     *         @OA\Property(property="identifiant", type="string"),
     *         @OA\Property(property="nom", type="string"),
     *         @OA\Property(property="prenom", type="string")
     *       )
     *    )
     * )
     * 
     * @OA\Tag(name="Etudiant")
     */
    #[Route('/groupe/{id_groupe}/etudiants', name: 'etudiants_groupe',methods: ['GET'])]
    public function getEtudiantsByGroupe($id_groupe): Response
    {
        $etudiants = $this->doctrine->getRepository(Etudiant::class)->getEtudiantsByGroupe($id_groupe);

        $response = new Response();
        $response->setContent(json_encode($etudiants));
        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');
        return $response;
    }

    /**
     * Récupérer toutes les salles
     * 
     * @OA\Response(
     *   response=200,
     *   description="Retourne la liste des salles",
     *   @OA\JsonContent(
     *     type="array",
     *     @OA\Items(
     *       type="object",
     *       @OA\Property(property="id", type="integer"),
     *       @OA\Property(property="salle", type="string")
     *     )
     *   )
     * )
     * 
     * @OA\Tag(name="Salle")
     */
    #[Route('/salles', name: 'salle',methods: ['GET'])]
    public function getAllSalles(): Response
    {
        $salles = $this->doctrine->getRepository(Salle::class)->findAll();

        $response = new Response();
        $response->setContent(json_encode($salles));
        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');
        return $response;
    }

    /**
     * Autocomplétion des noms des étudiants
     * 
     * @OA\Response(
     *  response=200,
     *  description="Retourne la liste des étudiants qui matchent avec la chaîne de caractères entrée",
     *  @OA\JsonContent(
     *    type="array",
     *    @OA\Items(
     *     type="object",
     *        @OA\Property(property="nom", type="string"),
     *        @OA\Property(property="prenom", type="string"),
     *        @OA\Property(property="promo", type="int")
     *     )
     *   )
     * )
     * 
     * @OA\Tag(name="Etudiant")
     */
    #[Route('/etudiants/{chaine}', name: 'etudiants',methods: ['GET'])]
    public function getEtudiantsByNom($chaine): Response
    {
        $etudiants = $this->doctrine->getRepository(Etudiant::class)->getEtudiantsByNomPrenom($chaine);

        $response = new Response();
        $response->setContent(json_encode($etudiants));
        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');
        return $response;
    }
    
}
